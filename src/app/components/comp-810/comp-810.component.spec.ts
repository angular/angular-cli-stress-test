/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp810Component } from './comp-810.component';

describe('Comp810Component', () => {
  let component: Comp810Component;
  let fixture: ComponentFixture<Comp810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
