/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp288Component } from './comp-288.component';

describe('Comp288Component', () => {
  let component: Comp288Component;
  let fixture: ComponentFixture<Comp288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
