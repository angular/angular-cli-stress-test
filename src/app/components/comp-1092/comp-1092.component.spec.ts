/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1092Component } from './comp-1092.component';

describe('Comp1092Component', () => {
  let component: Comp1092Component;
  let fixture: ComponentFixture<Comp1092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
