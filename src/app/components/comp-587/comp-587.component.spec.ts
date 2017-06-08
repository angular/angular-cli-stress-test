/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp587Component } from './comp-587.component';

describe('Comp587Component', () => {
  let component: Comp587Component;
  let fixture: ComponentFixture<Comp587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
