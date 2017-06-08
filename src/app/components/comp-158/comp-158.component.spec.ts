/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp158Component } from './comp-158.component';

describe('Comp158Component', () => {
  let component: Comp158Component;
  let fixture: ComponentFixture<Comp158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
