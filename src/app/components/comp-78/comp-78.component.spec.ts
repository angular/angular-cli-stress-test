/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp78Component } from './comp-78.component';

describe('Comp78Component', () => {
  let component: Comp78Component;
  let fixture: ComponentFixture<Comp78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
