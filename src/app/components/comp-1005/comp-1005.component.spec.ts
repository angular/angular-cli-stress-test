/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1005Component } from './comp-1005.component';

describe('Comp1005Component', () => {
  let component: Comp1005Component;
  let fixture: ComponentFixture<Comp1005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
