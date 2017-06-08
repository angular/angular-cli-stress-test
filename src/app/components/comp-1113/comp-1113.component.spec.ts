/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1113Component } from './comp-1113.component';

describe('Comp1113Component', () => {
  let component: Comp1113Component;
  let fixture: ComponentFixture<Comp1113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
