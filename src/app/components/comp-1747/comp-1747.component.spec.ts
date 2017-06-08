/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1747Component } from './comp-1747.component';

describe('Comp1747Component', () => {
  let component: Comp1747Component;
  let fixture: ComponentFixture<Comp1747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
