/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp812Component } from './comp-812.component';

describe('Comp812Component', () => {
  let component: Comp812Component;
  let fixture: ComponentFixture<Comp812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
