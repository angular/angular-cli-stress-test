/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3486Component } from './comp-3486.component';

describe('Comp3486Component', () => {
  let component: Comp3486Component;
  let fixture: ComponentFixture<Comp3486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
