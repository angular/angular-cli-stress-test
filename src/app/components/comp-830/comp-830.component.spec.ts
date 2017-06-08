/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp830Component } from './comp-830.component';

describe('Comp830Component', () => {
  let component: Comp830Component;
  let fixture: ComponentFixture<Comp830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
