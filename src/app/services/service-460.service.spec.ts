/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service460Service } from './service-460.service';

describe('Service460Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service460Service]
    });
  });

  it('should ...', inject([Service460Service], (service: Service460Service) => {
    expect(service).toBeTruthy();
  }));
});
