/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp936Component } from './comp-936.component';

describe('Comp936Component', () => {
  let component: Comp936Component;
  let fixture: ComponentFixture<Comp936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
