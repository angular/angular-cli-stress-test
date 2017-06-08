/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp363Component } from './comp-363.component';

describe('Comp363Component', () => {
  let component: Comp363Component;
  let fixture: ComponentFixture<Comp363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
