/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3625Component } from './comp-3625.component';

describe('Comp3625Component', () => {
  let component: Comp3625Component;
  let fixture: ComponentFixture<Comp3625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
