/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4800Component } from './comp-4800.component';

describe('Comp4800Component', () => {
  let component: Comp4800Component;
  let fixture: ComponentFixture<Comp4800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
