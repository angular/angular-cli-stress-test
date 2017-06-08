/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1979Component } from './comp-1979.component';

describe('Comp1979Component', () => {
  let component: Comp1979Component;
  let fixture: ComponentFixture<Comp1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
