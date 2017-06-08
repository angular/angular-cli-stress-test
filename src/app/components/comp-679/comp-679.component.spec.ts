/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp679Component } from './comp-679.component';

describe('Comp679Component', () => {
  let component: Comp679Component;
  let fixture: ComponentFixture<Comp679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
