/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4721Component } from './comp-4721.component';

describe('Comp4721Component', () => {
  let component: Comp4721Component;
  let fixture: ComponentFixture<Comp4721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
