/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1245Component } from './comp-1245.component';

describe('Comp1245Component', () => {
  let component: Comp1245Component;
  let fixture: ComponentFixture<Comp1245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
