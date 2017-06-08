/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service278Service } from './service-278.service';

describe('Service278Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service278Service]
    });
  });

  it('should ...', inject([Service278Service], (service: Service278Service) => {
    expect(service).toBeTruthy();
  }));
});
