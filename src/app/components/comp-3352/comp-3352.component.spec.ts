/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3352Component } from './comp-3352.component';

describe('Comp3352Component', () => {
  let component: Comp3352Component;
  let fixture: ComponentFixture<Comp3352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
