/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp340Component } from './comp-340.component';

describe('Comp340Component', () => {
  let component: Comp340Component;
  let fixture: ComponentFixture<Comp340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
