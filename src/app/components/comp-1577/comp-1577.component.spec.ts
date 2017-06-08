/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1577Component } from './comp-1577.component';

describe('Comp1577Component', () => {
  let component: Comp1577Component;
  let fixture: ComponentFixture<Comp1577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
