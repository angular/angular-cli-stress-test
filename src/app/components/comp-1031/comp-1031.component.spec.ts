/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1031Component } from './comp-1031.component';

describe('Comp1031Component', () => {
  let component: Comp1031Component;
  let fixture: ComponentFixture<Comp1031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
