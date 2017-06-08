/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service133Service } from './service-133.service';

describe('Service133Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service133Service]
    });
  });

  it('should ...', inject([Service133Service], (service: Service133Service) => {
    expect(service).toBeTruthy();
  }));
});
