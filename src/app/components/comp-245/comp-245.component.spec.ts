/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp245Component } from './comp-245.component';

describe('Comp245Component', () => {
  let component: Comp245Component;
  let fixture: ComponentFixture<Comp245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
