/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp301Component } from './comp-301.component';

describe('Comp301Component', () => {
  let component: Comp301Component;
  let fixture: ComponentFixture<Comp301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
