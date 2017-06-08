/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service259Service } from './service-259.service';

describe('Service259Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service259Service]
    });
  });

  it('should ...', inject([Service259Service], (service: Service259Service) => {
    expect(service).toBeTruthy();
  }));
});
