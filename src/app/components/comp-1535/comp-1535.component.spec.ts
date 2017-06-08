/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1535Component } from './comp-1535.component';

describe('Comp1535Component', () => {
  let component: Comp1535Component;
  let fixture: ComponentFixture<Comp1535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
