/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3171Component } from './comp-3171.component';

describe('Comp3171Component', () => {
  let component: Comp3171Component;
  let fixture: ComponentFixture<Comp3171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
