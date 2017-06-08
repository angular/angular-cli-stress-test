/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1381Component } from './comp-1381.component';

describe('Comp1381Component', () => {
  let component: Comp1381Component;
  let fixture: ComponentFixture<Comp1381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
