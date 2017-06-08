/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4183Component } from './comp-4183.component';

describe('Comp4183Component', () => {
  let component: Comp4183Component;
  let fixture: ComponentFixture<Comp4183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
