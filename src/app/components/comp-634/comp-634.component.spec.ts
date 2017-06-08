/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp634Component } from './comp-634.component';

describe('Comp634Component', () => {
  let component: Comp634Component;
  let fixture: ComponentFixture<Comp634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
