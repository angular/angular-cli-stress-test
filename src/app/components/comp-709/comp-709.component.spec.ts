/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp709Component } from './comp-709.component';

describe('Comp709Component', () => {
  let component: Comp709Component;
  let fixture: ComponentFixture<Comp709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
