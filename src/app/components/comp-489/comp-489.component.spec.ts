/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp489Component } from './comp-489.component';

describe('Comp489Component', () => {
  let component: Comp489Component;
  let fixture: ComponentFixture<Comp489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
