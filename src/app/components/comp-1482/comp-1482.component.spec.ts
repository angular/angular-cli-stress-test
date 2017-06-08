/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1482Component } from './comp-1482.component';

describe('Comp1482Component', () => {
  let component: Comp1482Component;
  let fixture: ComponentFixture<Comp1482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
