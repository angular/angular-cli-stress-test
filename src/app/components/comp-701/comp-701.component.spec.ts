/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp701Component } from './comp-701.component';

describe('Comp701Component', () => {
  let component: Comp701Component;
  let fixture: ComponentFixture<Comp701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
