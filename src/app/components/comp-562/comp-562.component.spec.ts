/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp562Component } from './comp-562.component';

describe('Comp562Component', () => {
  let component: Comp562Component;
  let fixture: ComponentFixture<Comp562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
