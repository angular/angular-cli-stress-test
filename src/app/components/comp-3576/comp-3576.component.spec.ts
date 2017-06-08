/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3576Component } from './comp-3576.component';

describe('Comp3576Component', () => {
  let component: Comp3576Component;
  let fixture: ComponentFixture<Comp3576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
