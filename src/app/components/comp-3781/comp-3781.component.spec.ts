/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3781Component } from './comp-3781.component';

describe('Comp3781Component', () => {
  let component: Comp3781Component;
  let fixture: ComponentFixture<Comp3781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
