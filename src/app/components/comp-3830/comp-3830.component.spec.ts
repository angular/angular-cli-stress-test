/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3830Component } from './comp-3830.component';

describe('Comp3830Component', () => {
  let component: Comp3830Component;
  let fixture: ComponentFixture<Comp3830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
