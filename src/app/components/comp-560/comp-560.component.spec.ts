/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp560Component } from './comp-560.component';

describe('Comp560Component', () => {
  let component: Comp560Component;
  let fixture: ComponentFixture<Comp560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
