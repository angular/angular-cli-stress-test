/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3993Component } from './comp-3993.component';

describe('Comp3993Component', () => {
  let component: Comp3993Component;
  let fixture: ComponentFixture<Comp3993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
