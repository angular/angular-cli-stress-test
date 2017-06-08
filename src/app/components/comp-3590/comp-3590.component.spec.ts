/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3590Component } from './comp-3590.component';

describe('Comp3590Component', () => {
  let component: Comp3590Component;
  let fixture: ComponentFixture<Comp3590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
