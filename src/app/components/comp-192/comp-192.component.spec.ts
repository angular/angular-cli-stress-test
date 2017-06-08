/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp192Component } from './comp-192.component';

describe('Comp192Component', () => {
  let component: Comp192Component;
  let fixture: ComponentFixture<Comp192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
