/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1132Component } from './comp-1132.component';

describe('Comp1132Component', () => {
  let component: Comp1132Component;
  let fixture: ComponentFixture<Comp1132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
