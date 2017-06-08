/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1874Component } from './comp-1874.component';

describe('Comp1874Component', () => {
  let component: Comp1874Component;
  let fixture: ComponentFixture<Comp1874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
