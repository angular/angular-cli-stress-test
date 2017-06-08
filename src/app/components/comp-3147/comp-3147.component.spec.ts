/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3147Component } from './comp-3147.component';

describe('Comp3147Component', () => {
  let component: Comp3147Component;
  let fixture: ComponentFixture<Comp3147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
