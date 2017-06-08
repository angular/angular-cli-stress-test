/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3449Component } from './comp-3449.component';

describe('Comp3449Component', () => {
  let component: Comp3449Component;
  let fixture: ComponentFixture<Comp3449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
