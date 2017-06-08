/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp219Component } from './comp-219.component';

describe('Comp219Component', () => {
  let component: Comp219Component;
  let fixture: ComponentFixture<Comp219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
