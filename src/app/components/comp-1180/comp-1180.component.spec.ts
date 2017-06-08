/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1180Component } from './comp-1180.component';

describe('Comp1180Component', () => {
  let component: Comp1180Component;
  let fixture: ComponentFixture<Comp1180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
