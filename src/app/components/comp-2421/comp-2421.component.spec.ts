/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2421Component } from './comp-2421.component';

describe('Comp2421Component', () => {
  let component: Comp2421Component;
  let fixture: ComponentFixture<Comp2421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
